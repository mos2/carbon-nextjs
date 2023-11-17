'use client';

import EmployeeTable from './EmployeeTable';
import { Column, Grid } from '@carbon/react';
import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/core';

const octokitClient = new Octokit({});

import axios from 'axios';

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

function RepoPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getEmployees() {
      axios
        .get('http://localhost:8080/employees')
        .then(function (res) {
          // handle success
          console.log(res);
          setRows(getRowItems(res.data.employees));
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          console.log('Done fetching');
        });
    }

    getEmployees();
  }, []);

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
