import React, { useEffect, useState } from "react";
import axios from "axios";
const Users = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const data = axios
      .get("https://lms-be-api.herokuapp.com/users")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <div className="w-full overflow-x-auto">
        {/* <table className="w-full text-left border border-separate rounded border-slate-200">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                sr#
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Email
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Status
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Action
              </th>
            </tr>
            {data.map((ele: any) => (
              <tr className="odd:bg-slate-50" key={ele.id}>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {ele.id}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {ele.email}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  {ele.status}
                </td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  <div className="flex justify-around">
                    <button className=" odd:bg-blue-100 even:bg-red-700 px-4 py-1 rounded-xl">
                      Edit
                    </button>
                    <button className=" odd:bg-red-100 px-4 py-1 rounded-xl">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
        {/* ?????????????? */}

        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Sr#
              </th>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-3  py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((ele: any) => (
              <tr key={ele.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                  <div className="flex items-center">
                    <div className="">
                      <div className="font-medium text-gray-900">{ele.id}</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                  <div className="flex items-center">
                    <div className="">
                      <div className="font-medium text-gray-900">
                        {ele.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    {ele.status}
                  </span>
                </td>

                <td className="relative whitespace-nowrap py-4 pl-3 pr-4  text-sm font-medium sm:pr-6">
                  <div className="flex gap-2 text-white">
                    <button className="px-2 py-1 border border-gray-200 rounded-md bg-green-400 hover:bg-green-500">
                      Edit
                    </button>
                    <button className="px-2 py-1 border border-gray-200 rounded-md bg-blue-400 hover:bg-blue-500">
                      View
                    </button>
                    <button className="px-2 py-1 border border-gray-200 rounded-md bg-red-400 hover:bg-red-500">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
