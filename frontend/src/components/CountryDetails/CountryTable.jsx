import React, { useMemo } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Select,
  MenuItem,
} from "@mui/material";

const CountryTable = ({ countryDetails }) => {
  const [name, capital, stateNames] = useMemo(() => {
    if (!countryDetails) return [];
    return [
      countryDetails.name,
      countryDetails.capital,
      countryDetails?.state_names?.split(", "),
    ];
  }, [countryDetails]);

  if (!countryDetails) return null;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <strong>Country Name</strong>
          </TableCell>
          <TableCell>
            <strong>Capital</strong>
          </TableCell>
          <TableCell>
            <strong>State Name</strong>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>{name}</TableCell>
          <TableCell>{capital}</TableCell>
          <TableCell>
            <Select size="small" value={stateNames[0]}>
              {stateNames.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CountryTable;
