import { useEffect, useState, useMemo } from "react";
import { useTable } from "react-table";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const RegisteredCamps = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    async function fetchCampDetails() {
      try {
        const response = await axiosSecure.get(`/registeredCamp/${user.email}`);
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching camp details:", error);
      }
    }
    fetchCampDetails();
  }, [user.email, axiosSecure]);
  console.log("userInfo", userInfo);

  const columns = useMemo(
    () => [
      {
        Header: "Camp Name",
        accessor: "registered",
      },
      {
        Header: "Date and Time",
        accessor: "date",
      },
      {
        Header: "Camp Fees",
        accessor: "camp_fees",
      },
      {
        Header: "Location",
        accessor: "location",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data: userInfo });

  const { getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div>
      {userInfo.length > 0 ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Registered Camps</h1>
          <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
            <thead className="bg-gray-100">
              {headerGroups.map((headerGroup, idx) => (
                <tr key={idx} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      key={idx}
                      {...column.getHeaderProps()}
                      className="py-2 px-4 font-semibold text-left"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, idx) => {
                prepareRow(row);
                return (
                  <tr
                    key={idx}
                    {...row.getRowProps()}
                    className="hover:bg-gray-50"
                  >
                    {row.cells.map((cell) => (
                      <td
                        key={idx}
                        {...cell.getCellProps()}
                        className="py-2 px-4"
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default RegisteredCamps;
