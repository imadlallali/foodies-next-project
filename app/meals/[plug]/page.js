export default async function mealsplug({ params }) {
    const {plug} = await params;
  return (
    <>
      <h1>THE MEAL IS</h1>
      <h2>{plug}</h2>
    </>
  );
}
