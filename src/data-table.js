import React, { Component } from 'react';

class TableHeaderBody extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: props.items
        }
    }

    getRows(items){
        const rows = [];
        items.map((item, i) => {

                return rows.push(item)
 
        });

        return rows;
    }

    render(){
        const tableItems = this.state.items;
        const rows = this.getRows(tableItems);
        return(
            <tr className='tr-body'>
                {rows.map((item, index) => {
                    return item.map((data, i) => {
                        return(
                            <td className='table-td' key={i}>{data}</td>
                        )
                    })
                })}
            </tr>
        )
    }
}

class Body extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: [props.datas]
        }
    }

    render(){
        const tableItems = this.state.items;
        const tableLength = tableItems[0].length;
        return(
            <tbody>
               {tableItems[0].map((item, index) => {
                    return (
                        <tr key={index} className='tr-body'>
                            {item.map((data, i) => {
                                return(
                                    <td className='table-td' key={i}>{data}</td>
                                )
                            })}
                        </tr>
                    )
               })} 
            </tbody>
        )

    }
}

class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
            names: [props.names],
            editable: false
        }
    }

    render(){
        const names = this.state.names
        return(
            <thead>
               {names[0].map((item) => {


                            return item.map((data, i) => {
                                return(
                                    <tr key={i} className='tr-head'>
                                    <th className='table-td-head' >{data}</th>
                                    </tr>
                                )
                            })

               })} 
            </thead>
        )
    }
}

class DataTable extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: props.items,
            columnName: [props.columnName],
            head: props.showHead,
            footer: false
        }
    }

    render() {
        return (
            <table id='data-table-view'>
                {(this.state.head) ? <Header names={this.state.columnName} /> : null}
                <Body datas={this.state.items}/>
            </table>
        );
    }

}

export default DataTable;