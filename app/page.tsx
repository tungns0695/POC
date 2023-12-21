'use client';
import { MockDataGenerator } from '../utils/MockDataGenerator'
import { ShipmentTable } from '../components/ShipmentTable/ShipmentTable';
import { Container } from '@mantine/core';
import { Flex, Button, Modal, Space, Input, Slider, NumberInput } from '@mantine/core';
import { Shipment } from '../types/Shipment';
import React, { useEffect, useState } from "react";
import { notifications } from '@mantine/notifications';
import { Map } from '../components/Map/Map';

export default function HomePage() {

  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [config, setConfig] = useState<any>({});
  const [tempConfig, setTempConfig] = useState<any>({});
  const [mapOpen, setMapOpen] = useState(false);
  const [configOpen, setConfigOpen] = useState(false);

  useEffect(function mount() {
    let configStorageString = window.localStorage.getItem('config');
    let configStorageData: any;
    if (!configStorageString) {
      configStorageData = {
        randomAmount: 100,
        group: 5,
        proxyendpoint: "https://nodeproxy-5xwr3324aa-uc.a.run.app",
        endpoint: "http://13.212.217.154:5000/cluster"
      }
      window.localStorage.setItem("config", JSON.stringify(configStorageData));
    } else {
      configStorageData = JSON.parse(configStorageString);
    }
    setConfig(configStorageData);
    setTempConfig(configStorageData);

    let localStorageData = window.localStorage.getItem('mockData');
    if (!localStorageData) {
      generateMockData();
    } else {
      setShipments([...JSON.parse(localStorageData)]);
    }
  }, [])

  function generateMockData() {
    let generatedMockData = MockDataGenerator(config.randomAmount);
    setShipments([...generatedMockData]);
    window.localStorage.setItem("mockData", JSON.stringify(generatedMockData));
  }

  async function groupShipments(shipments: Shipment[]) {
    try {
      const rawResponse = await fetch(config.proxyendpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          k: config.group,
          endpoint: config.endpoint,
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

  const saveConfig = function () {
    setConfig(tempConfig);
    window.localStorage.setItem("config", JSON.stringify(tempConfig));
    setConfigOpen(false);
  }

  const closeConfig = function () {
    setTempConfig(config);
    setConfigOpen(false);
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
        <Button onClick={() => setConfigOpen(true)} variant="default">Config</Button>
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
      <Modal opened={configOpen} onClose={closeConfig} size="xs" title="Config">
        <Input.Wrapper label="Enpoint">
          <Input placeholder="Input Enpoint"
            value={config.endpoint}
            onChange={(value) => setTempConfig({ ...tempConfig, endpoint: value })}
          />
          <Space h="xs" />
          <Input placeholder="Input Proxy Enpoint"
            value={config.proxyendpoint}
            onChange={(value) => setTempConfig({ ...tempConfig, proxyendpoint: value })}
          />
        </Input.Wrapper>
        <Space h="xs" />
        <NumberInput
          onChange={(value) => setTempConfig({ ...tempConfig, randomAmount: value })}
          label="Random record amount"
          value={config.randomAmount}
          placeholder="Random record amount"
        />
        <Space h="xl" />
        <Slider
          color="blue"
          min={1}
          max={7}
          step={1}
          onChange={(value) => setTempConfig({ ...tempConfig, group: value })}
          value={config.group}
          marks={[
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
            { value: 5, label: '5' },
            { value: 6, label: '6' },
            { value: 7, label: '7' },
          ]}
        />
        <Space h="xl" />
        <Button variant="filled" onClick={saveConfig} color="cyan" radius="xl">Save</Button>
      </Modal>
    </Container>
  );
}
