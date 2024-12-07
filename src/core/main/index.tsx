import { UserSpawned } from "../unit/package/Hooks/main";

export const App = () => {
  return <UserSpawned callback={() => console.log('Hello User Spawned')} onlyHost={false}/>
};
