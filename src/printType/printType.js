import React, { Component } from 'react';

class PrintType extends Component {

    findFilterTypes(value) {
        //if(value === "All") {
            //console.log("all")
        //}else{
            const printType = this.props.entireBookList.find(printType => printType.name === value)
            console.log(printType); //test

        //}
    }

    render() {
        const printTypes = this
              .props
              .entireBookList
              .map(
              (printType, i) => <option value={printType.name} key={i}>{printType.name}</option>
              );
              console.log(this.props)
              console.log(this.props.entireBookList)
        return(
            <div className='print_type'>
                <label htmlFor='print'>Print Type: </label>
                <select 
                  id='print'
                  name='print'
                  onChange={e => this.changeTypeFilter(e.target.value)}>
                  <option value='None'>All</option>
                  {printTypes}
                </select>
            </div>
        )
    }
}

export default PrintType;