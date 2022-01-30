import React from 'react';
import SingleButton from './SingleButton.jsx';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import buttons from "../ButtonDetails";
function ButtonSection() {
  return (
    <>
      <h1 className="buttonHeading">Buttons</h1>
      <div className="buttonSection">
        <div className="button">
          <SingleButton class="default" name={buttons[0].name} title="Default" />
          <SingleButton class="defaultHover" name={buttons[1].name} title="Default" />
        </div>
        <div className="button">
          <SingleButton class="outline" name={buttons[2].name} title="Default" />
          <SingleButton class="outlineHover" name={buttons[3].name} title="Default" />
        </div>
        <div className="button">
          <SingleButton class="text" name={buttons[4].name} title="Default" />
          <SingleButton class="textHover" name={buttons[5].name} title="Default" />
        </div>
        <div className="button"> <SingleButton class="disabledShadow" name={buttons[6].name} title="Default" /></div>
        <div className="button">
          <SingleButton class="disable" name={buttons[7].name} title="Default" />
          <SingleButton class="disableHover" name={buttons[8].name} title="Default" /></div>
        <div className="button">
          <SingleButton class="grocery" name={buttons[9].name} icon={<AddShoppingCart fontSize='sm' />} title="Default" />
          <SingleButton class="groceryHover" name={buttons[10].name} title="Default" iconOne={<AddShoppingCart fontSize='sm' />} /></div>
        <div className="button">
          <SingleButton class="sm" name={buttons[11].name} title="Default" />
          <SingleButton class="md" name={buttons[12].name} title="Default" />
          <SingleButton class="lg" name={buttons[13].name} title="Default" />
        </div>
        <div className="button">
          <SingleButton class="default" name={buttons[14].name} title="Default" />
          <SingleButton class="md" name={buttons[15].name} title="Default" />
          <SingleButton class="secondary" name={buttons[16].name} title="Default" />
          <SingleButton class="danger" name={buttons[17].name} title="Default" />
        </div>
        <div className="button">
          <SingleButton class="defaultHover" name={buttons[18].name} title="Default" />
          <SingleButton class="defaultDark" name="&nbsp;" title="Default" />
          <SingleButton class="secondaryHover" name="&nbsp;" title="Default" />
          <SingleButton class="dangerHover" name="&nbsp;" title="Default" />
        </div>
        <p class="icons"><a href="https://material.io/resources/icons/?style=round">Icons: https://material.io/resources/icons/?style=round</a> </p>
      </div>
    </>
  )
}

export default ButtonSection;