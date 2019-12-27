import React, { Component } from 'react';

class PrintType extends Component {
    changeTypeFilter(value) {
        if(value === 'All') {
            this.props.changePrintTypeHandler(null);
        }else{
            const printType = this.props.entireBookList.find(printType => printType === value);
            this.props.changePrintTypeHandler(printType)
        }
    }
    
    render() {
       const options = this
             .props
             .entireBookList
             .map(
               (printType, i) => <option value={printType} key={i}>{printType}</option>
             );

        return(
            <div className='print_type'>
                <label htmlFor='print'>Print Type: </label>
                <select 
                  id='print'
                  name='print'
                  onChange={e => this.changeTypeFilter(e.target.value)}>
                  <option value='None'>All</option>
                  {options}
                </select>
            </div>
        )
    }
}

export default PrintType;