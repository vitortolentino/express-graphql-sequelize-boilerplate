'use strict';

export function getFields(model, info) {  
  let modelAttributes = model.rawAttributes;
  let modelAttributesList = new Array();
  let requestedFields = info.fieldNodes[0].selectionSet.selections;
  for (let prop in modelAttributes) {
    modelAttributesList.push(prop);
  }
  requestedFields = requestedFields.map(selection => {
    if(modelAttributesList.includes(selection.name.value)) 
      return selection.name.value;    
  });
  return requestedFields;
}