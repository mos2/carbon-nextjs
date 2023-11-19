'use client';

import EmployeeTable from './EmployeeTable';
import { Column, Grid } from '@carbon/react';
import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/core';

const octokitClient = new Octokit({});

import axios from 'axios';
import process from 'next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss';

const headers = [
  {
    key: 'id',
    header: 'Id',
  },
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'role',
    header: 'Role',
  },
];

const EMPLOYEE_SERVER_URL =
  'http://users-service-go.ucc.svc.cluster.local:8080';
const EMPLOYEES_PATH = '/employees';

function RepoPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getEmployees() {
      axios
        .get(EMPLOYEE_SERVER_URL + EMPLOYEES_PATH)
        .then(function (res) {
          console.log(res);
          setRows(getRowItems(res.data.employees));
        })
        .catch(function (error) {
          console.log(error);
          setError('Error obtaining employees data');
        })
        .finally(function () {
          console.log('Done fetching');
          setLoading(false);
        });
    }

    getEmployees();
  }, []);

  if (loading) {
    return 'Loading...';
  }

  if (error) {
    return `Error! ${error}`;
  }

  return (
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        <EmployeeTable headers={headers} rows={rows} />
      </Column>
    </Grid>
  );
}

const getRowItems = (rows) =>
  rows.map((row) => ({
    ...row,
    id: row.id,
    name: row.name,
    role: row.role,
  }));

export default RepoPage;
