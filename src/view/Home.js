let a = 0;

function Home() {
  const contar = () => {
    a++;
    document.getElementById('demo').innerHTML = a;
  }

  return (
    <>
      <button onClick={() => contar()}>Take the shot!</button>
      <p id="demo"></p>
    </>
  );
}

export default Home;      