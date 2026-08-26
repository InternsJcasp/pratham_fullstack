export function FormSubmit() {
  const submitHandle = (e) => {
    e.preventDefault();
    console.log("Form is Submitted");
  };
  return (
    <>
      <form onSubmit={submitHandle}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
