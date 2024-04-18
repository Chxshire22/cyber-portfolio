export default function ChangeColor(props){

  let{
    siteColor,
    setSiteColor
  } = props
  
  return (
    <>
    <label htmlFor="colors"></label>
      <select
        name="colors"
        id="colors"
        data-color={siteColor}
        onChange={(e) => setSiteColor(e.target.value)}
        defaultValue={siteColor}
      >
        <option label="green" value="green"></option>
        <option label="purple" value="purple"></option>
      </select>
    </>
  );
}