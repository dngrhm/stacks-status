import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { PageHeader, StatusCard } from "../components"
import { getInfo, getNetworkInfo, getStatus } from '../services';
import Head from 'next/head';

function App({localInfo, networkInfo, localStatus}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const localHeight = localInfo?.stacks_tip_height;
  const networkHeight = networkInfo?.stacks_tip_height;
  const syncPercent = localHeight && networkHeight ? (localHeight / networkHeight) * 100 : 0;
  const statusDescription = localHeight && networkHeight ? `${localHeight} of ${networkHeight}` : 'Loading...';

  return (
    <div className="min-h-screen med:p-10 bg-gray-50">
      <Head>
        <title>Stacks Node - Umbrel</title>
      </Head>
      <main className="py-10">
        <PageHeader
          status={localStatus?.status}
          version={localInfo?.server_version?.split(" ", 2)[1]}
        />

        <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div className="space-y-6 lg:col-start-1 lg:col-span-1">

            <StatusCard
              title="Sync Status"
              percent={syncPercent}
              description={statusDescription}
            />

          </div>
        </div>

      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const localInfo = JSON.parse(JSON.stringify(await getInfo()));
    const networkInfo = JSON.parse(JSON.stringify(await getNetworkInfo()));
    const localStatus  = JSON.parse(JSON.stringify(await getStatus()));

    return {
      props: {
        localInfo,
        networkInfo,
        localStatus,
      },
    }
  } catch (err) {
    return {props: {}}
  }
} 

export default App;
