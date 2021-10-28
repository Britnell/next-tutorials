import React from "react"
import Page from "../lib/page"


function formData(form){
    let formdata = {}
    for(const i in form.elements){
        let el = form.elements[i]
        if(typeof el==='object'){
            if(el.name) formdata[el.name] = el.value
            else        formdata[i] = el.value
        }
    }
    return formdata;
}

export default function Form(){

    const [data,setData] = React.useState({
        name: '123',
        '1': 'text',
    })

    const change = (ev)=>{
        let form = formData(ev.target.form)
        setData(form)        
    }

    const submit = (ev)=>{
        ev.preventDefault()
        console.log('sumbit', data)
    }

    return (<Page>
        <div>
            <form onChange={change} onSubmit={submit} >
                <div>
                    <label>name: </label>
                    <input className="border-2 m-2 p-1 " name="name" value={data.name} type="text" />
                </div>
                <div>
                    <label>Field 1: </label>
                    <input className="border-2 m-2 p-1 " type="text" value={data['1']} />
                </div>
                <div>
                    <input className="p-2 rounded-lg " type="submit" value="Submit" />
                </div>
            </form>
        </div>
    </Page>)
}

//--