import {select} from "./module.js";

const mySelect = new select('.select')
const module = {
  sizeList: 150, //Указать высоту раскрываемого списка в px. По умолчанию стоит false и список раскрывается по максимальной высоте взависимости от количества и высоты элементов списка
  // defaultSelection: 2, //Номер выбранного значения по умолчанию начиная с 1. В ином случае значение будет placeholder по умолчанию(если не указан свой placeholder)
  placeholder: 'Свой вариант', //В случае если defaultSelection не указан, можно указать какой placeholder. В случае если указал defaultSelection, переданный placeholder проигнорируется.
  appearance: {
    placeholderColor: '#green',
    // icon: './arrow.svg'
  }
}
mySelect.selectInit(module);