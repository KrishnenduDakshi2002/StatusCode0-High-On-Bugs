/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import FeatherIcon from 'feather-icons-react';

import { useNavigate } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import { useDisconnect } from '@thirdweb-dev/react';

import Piechart from '../Charts/Pie/Piechart';

import {
  Modal,
  Button,
  Avatar,
  Group,
  Flex,
  useMantineTheme,
  Input,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const LoanPool = () => {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  const { user, isAuthenticated, isLoading } = useAuth0();

  const { logout } = useAuth0();

  const disconnect = useDisconnect();
  // console.log(pathname);

  return (
    <>
      <section className="flex justify-center items-center w-screen h-screen bg-main-bg">
        <div className="flex-6 h-full flex justify-between items-center flex-col px-2 py-2 cursor-pointer">
          <FeatherIcon
            icon="user"
            style={{
              color: 'white',
            }}
          />

          <div className="gap-5 flex flex-col justify-center items-center">
            <FeatherIcon
              icon="home"
              style={{
                color: 'white',
              }}
            />
            <FeatherIcon
              icon="bell"
              style={{
                color: 'white',
              }}
            />
            <FeatherIcon
              icon="book-open"
              style={{
                color: 'white',
              }}
            />
            <FeatherIcon
              icon="phone"
              style={{
                color: 'white',
              }}
            />
          </div>

          <div className="gap-2 flex flex-col justify-center items-center cursor-pointer">
            <FeatherIcon
              icon="log-out"
              style={{
                color: 'white',
              }}
              onClick={() => {
                disconnect();
                logout({ logoutParams: { returnTo: 'http://localhost:4200' } });
              }}
            />
            <FeatherIcon
              icon="moon"
              style={{
                color: 'white',
              }}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-center items-center w-full h-full overflow-hidden">
          <div className="w-[30%] h-screen flex justify-center items-center">
            <Piechart />
          </div>

          <div className="flex flex-col justify-center items-center gap-3 h-full w-[50%]">
            <div
              className="py-6 w-[25rem] cursor-pointer rounded-lg border-2 border-cyan-400 font-poppins text-white font-semibold"
              onClick={() => {
                open();
              }}
            >
              Deposit amount
            </div>
            <div className="py-6 w-[25rem] cursor-pointer rounded-lg border-2 border-cyan-400 font-poppins text-white font-semibold">
              Withdraw
            </div>
            <div className="py-6 w-[25rem] cursor-pointer rounded-lg border-2 border-cyan-400 font-poppins text-white font-semibold">
              Takeloan
            </div>
            <div className="py-6 w-[25rem] cursor-pointer rounded-lg border-2 border-cyan-400 font-poppins text-white font-semibold">
              Payback
            </div>
          </div>
        </div>
      </section>

      <Modal
        opened={opened}
        onClose={close}
        centered
        size="30"
        transitionProps={{
          transition: 'fade',
          duration: 600,
          timingFunction: 'linear',
        }}
        withCloseButton={false}
        overlayProps={{
          color: theme.colors.gray[7],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <div className="w-full flex justify-center items-center mb-4"></div>
        <Flex justify="center" align="center" gap="md" direction="column">
          <Input />
          <Input />
          <Button className="bg-bg-primary text-black font-Ubuntu font-normal hover:bg-gray-900 hover:text-white">
            Copy
          </Button>
          <Button
            className="bg-bg-primary text-black font-Ubuntu font-normal hover:bg-gray-900 hover:text-white"
            onClick={() => {
              disconnect();
              close();
              navigate('/');
            }}
          >
            Disconnect
          </Button>
        </Flex>
      </Modal>
    </>
  );
};

export default LoanPool;
