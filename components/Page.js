import Navigation from './Navigation';

function Page(props) {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  );
}

export default Page;
