'use client';
import { MockDataGenerator } from '../utils/MockDataGenerator'
import { ShipmentTable } from '../components/ShipmentTable/ShipmentTable';
import { Container } from '@mantine/core';
import { Flex, Button, Modal, Space } from '@mantine/core';
import { Shipment } from '../types/Shipment';
import React, { useEffect, useState } from "react";
import { notifications } from '@mantine/notifications';
import { Map } from '../components/Map/Map';

export default function HomePage() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [mapOpen, setMapOpen] = useState(false);

  useEffect(function mount() {
    let localStorageData = window.localStorage.getItem('mockData');
    if (!localStorageData) {
      generateMockData();
    } else {
      setShipments([...JSON.parse(localStorageData)]);
    }
  }, [])

  function generateMockData() {
    let generatedMockData = MockDataGenerator(100);
    setShipments([...generatedMockData]);
    window.localStorage.setItem("mockData", JSON.stringify(generatedMockData));
  }

  async function groupShipments(shipments: Shipment[]) {
    try {
      const rawResponse = await fetch("http://54.255.164.169:5000/cluster", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          k: 5,
          orders: shipments.map(x => {
            return {
              order_id: x.WaybillNo,
              destination: x.Site,
              lat: x.Coordinate.lat,
              long: x.Coordinate.long
            }
          })
        })
      });
      const response = await rawResponse.json();
      let orders: any[] = [];
      for (const prop in response.orders) {
        orders = orders.concat(response.orders[prop]);
      }
      const groupedData = shipments.map<Shipment>(shipment => {
        const order = orders.find(order => order.order_id == shipment.WaybillNo);
        return { ...shipment, Group: order.group, GroupType: "Automatic" } as Shipment;
      });
      setShipments([...groupedData]);
      window.localStorage.setItem("mockData", JSON.stringify(groupedData));
    } catch (ex) {
      notifications.show({
        title: 'Api call error',
        message: "Error encounter when call api",
        color: 'red',
      })
    }
  }

  return (
    <Container fluid >
      <h2>Shipment Order List</h2>
      <Flex mih={50} gap="xs" justify="flex-end">
        <Button variant="filled" onClick={generateMockData} color="cyan" radius="xl">Regenerate Random Data</Button>
        <Button variant="filled" color="cyan" radius="xl" disabled={true}>Vehicle Assignment</Button>
        <Button onClick={() => groupShipments(shipments)} variant="filled" color="cyan" radius="xl">Create Shipment Order</Button>
      </Flex>
      <ShipmentTable data={shipments} />
      <Space h="xs" />
      <Flex mih={50} gap="xs" justify="flex-start">
        <Button onClick={() => setMapOpen(true)} variant="default">Show in map</Button>
        {/* <Button variant="default">Config</Button> */}
      </Flex>
      <Modal
        opened={mapOpen}
        onClose={() => setMapOpen(false)}
        fullScreen
        radius={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <Map shipments={shipments} />
      </Modal>
      {/* <Modal opened={true} onClose={close} size="xs" title="Config">

      </Modal> */}
    </Container>
  );
}
