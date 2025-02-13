import dynamic from 'next/dynamic';

const App = dynamic(() => import('../components/AppShell'), {
  ssr: false,
});

export default function Index() {
  // return <AppShell page={DynamicHome} />;
  return <App />;
}
