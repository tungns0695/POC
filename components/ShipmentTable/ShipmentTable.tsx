'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { Shipment } from '../../types/Shipment';
import { DataTable, type DataTableSortStatus } from 'mantine-datatable';
import classes from './ShipmentTable.module.css';
import { Flex, Button } from '@mantine/core';
import { LiaFileExportSolid } from "react-icons/lia";
import { TbTableExport } from "react-icons/tb";
import sortBy from 'lodash/sortBy';

interface ShipmentTableProps {
  data: Shipment[];
}
const PAGE_SIZE = 15;

export const ShipmentTable: React.FC<ShipmentTableProps> = ({ data }) => {
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<Shipment>>({
    columnAccessor: 'name',
    direction: 'asc',
  });
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(data.slice(0, PAGE_SIZE));

  useEffect(() => {
    const shortedData = sortBy(data, sortStatus.columnAccessor) as Shipment[];
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(sortStatus.direction === 'desc' ? shortedData.reverse().slice(from, to) : shortedData.slice(from, to));
  }, [sortStatus, page, data]);

  return (
    <>
      <Flex mih={50} gap="xs" justify="flex-end">
        <Button disabled={true} variant="default"><LiaFileExportSolid /> Export selected row</Button>
        <Button disabled={true} variant="default"><TbTableExport /> Export all</Button>
      </Flex>
      <DataTable
        height={'auto'}
        withTableBorder
        records={records}
        idAccessor="WaybillNo"
        classNames={{
          header: classes.header
        }}
        sortStatus={sortStatus}
        onSortStatusChange={setSortStatus}
        columns={[
          { accessor: 'Id', width: 30, title: "#", sortable: true },
          { accessor: 'WaybillNo', width: 100, title: "Waybill No.", sortable: true },
          { accessor: 'CustomerName', width: 150, title: "Customer Name", sortable: true },
          { accessor: 'Site', width: 100, sortable: true },
          { accessor: 'WaybillDate', width: 100, title: "Waybill Date", sortable: true },
          { accessor: 'Status', width: 100, sortable: true },
          {
            accessor: 'Group', width: 100, sortable: true,
            render: ({ Group }) => Group.replace('group', 'Group '),
            cellsStyle: (record, index) => ({ fontStyle: 'italic', color: "green", fontWeight: "bold" })
          },
          { accessor: 'GroupType', width: 50, title: "Group Type", sortable: true },
          { accessor: 'Coordinate', width: 150, sortable: true, render: ({ Coordinate }) => Coordinate.lat + " " + Coordinate.long },
          { accessor: 'CustomerReference', width: 100, title: "Customer Reference" },
          { accessor: 'CBM', width: 100, sortable: true },
          { accessor: 'Weight', width: 100, sortable: true },
        ]}
        totalRecords={data.length}
        recordsPerPage={PAGE_SIZE}
        loadingText="Loading..."
        page={page}
        paginationSize="md"
        onPageChange={(p) => setPage(p)}
      />
    </>
  );
}
