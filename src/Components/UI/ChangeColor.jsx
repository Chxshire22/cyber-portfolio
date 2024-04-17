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
        <option value="green">Green</option>
        <option value="purple">Purple</option>
      </select>
    </>
  );
}