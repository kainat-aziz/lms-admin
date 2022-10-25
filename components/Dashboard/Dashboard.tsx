import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Profile from "/assets/images/image5.svg";
import { Listbox, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { GetServerSideProps } from "next";
import { request } from "https";
import axios from "axios";

const createUserApi = "https://lms-be-api.herokuapp.com/auth/create";
const changeStatusApi = "https://lms-be-api.herokuapp.com/users/update-status";

const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

const Dashboard = ({ data }: any) => {
  const status = [
    { id: 0, name: "Pending" },
    { id: 1, name: "Accepted" },
    { id: 2, name: "Rejected" },
  ];
  const [selected, setSelected] = useState(null);
  const [requests, setRequests] = useState(data);
  const [activeUser, setActiveUser] = useState(requests[0]);
  const [activeId, setActiveId] = useState(0);

  // const usersRequest = async () => {
  //   const res = await fetch("https://lms-be-api.herokuapp.com/user");
  //   const data = await res.json();
  //   setRequests(data);
  // };

  const createUserLogin = async () => {
    // const userRequestApi = "https://lms-be-api.herokuapp.com//user";
    console.log("herer", selected, activeUser.email);
    if (selected === "accepted") {
      const res = axios.post(createUserApi, {
        email: activeUser.email,
        status: selected,
      });

      console.log(res);
    }

    const data = axios.patch(changeStatusApi, {
      id: activeId,
      email: activeUser.email,
      status: selected,
    });
    console.log(data);
    // if (selected === "accepted") {
    //   const res = await fetch(createUserApi, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email: activeUser.email, status: selected }),
    //   });
    //   const data = await res.json();
    //   console.log(data);
    // }
    // const res = await fetch(changeStatusApi, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     id: activeId,
    //     email: activeUser.email,
    //     status: selected,
    //   }),
    // });
    // const data = await res.json();
    // console.log(data);
  };

  // const changeUserStatus = async () => {
  //   if (activeId === activeUser.id) {
  //     const user = {
  //       id: activeUser?.id,
  //       email: activeUser?.email,
  //       status: selected,
  //     };
  //     const res = await fetch(
  //       "https://lms-be-api.herokuapp.com/user/update-status",
  //       {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(user),
  //       }
  //     );

  //     if (!res.ok) console.log("error");

  //     usersRequest();
  //   }

  //   // createUserLogin(activeUser);
  // };

  useEffect(() => {
    // changeUserStatus();
    if (selected !== null) createUserLogin();
  }, [selected]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex-auto">
        <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
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
                  {requests.map((ele: any) => (
                    <tr key={ele.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="">
                            <div className="font-medium text-gray-900">
                              {ele.id}
                            </div>
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
                        <select
                          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          defaultValue={status[0].name}
                          onChange={(e: any) => {
                            setSelected(e.target.value);
                            setActiveId(ele.id);
                            setActiveUser(ele);
                          }}
                        >
                          {status.map((item) => (
                            <option
                              key={item.id}
                              value={item.name.toLowerCase()}
                            >
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
