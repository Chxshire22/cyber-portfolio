export default function ChangeColor(props){

  let{
    siteColor,
    setSiteColor
  } = props
  
  return (
    <>
      <select
        name="colors"
        id="colors"
        data-color={siteColor}
        onChange={(e) => setSiteColor(e.target.value)}
        defaultValue={siteColor}
      >
        <option label="green" value="green">Green</option>
        <option label="purple" value="purple">Purple</option>
      </select>
    </>
  );
}