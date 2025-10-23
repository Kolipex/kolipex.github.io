<script>
$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

const fuzzy = (w1,w2)=>{
    [w1, w2] = [w1.toLowerCase(), w2.toLowerCase()];
    let v = 0;
    let log = [];
    let segments =[];
    for(l of [1,2,3]) for(let w=0; w<w2.length; w++) if(w1.slice(w,w+l)) segments.push(w1.slice(w,w+l));
    for(item of new Set(segments)){
        const vv = w2.includes( item ) ? l**2 : -l;
        log.push({w2:w2, w1:item, v:vv});
        v += vv;
    };
    console.log(log);
    return v;
}

addEventListener('DOMContentLoaded', ()=>{
    const b = $('tbody');
    const t = $('template');
    
    const addRow = ()=>{
        const e = b.appendChild(t.content.cloneNode(true).firstElementChild);
        e.querySelector('button.del').addEventListener('click', ev=>e.remove());
        e.querySelector('.drag').addEventListener('mousedown', ev=>{
            const offY = ev.offsetY;
            const f = mv=>{
                e.style.translate = null;

                let er = e.getBoundingClientRect();
                const pos = Math.floor((mv.y-er.y)/er.height);

                if(pos>0) e.nextElementSibling?.after(e);
                if(pos<0) e.previousElementSibling?.before(e);
                
                er = e.getBoundingClientRect();
                let ty = (mv.y-er.y)-offY

                if(!e.nextElementSibling) ty = Math.min(ty, 0);
                if(!e.previousElementSibling) ty = Math.max(ty, 0);

                e.style.translate = `0px ${ty}px`;
            }
            addEventListener('mousemove', f)
            addEventListener('mouseup', mv=>{
                removeEventListener('mousemove', f);
                e.style.translate = null;
            },{once:true});
        });
        return e;
    }

    addEventListener('paste', ev=>{
        const txt = (ev.clipboardData || window.clipboardData).getData('text');
        if(txt.includes('\t')) ev.preventDefault();
        let data = txt.trim().split('\n').map(r=>r.split('\t'));

        while([...b.querySelectorAll('tr')].length < data.length) addRow();

        [...b.querySelectorAll('tr')].forEach((r,ri)=>{
            [...r.querySelectorAll('td :is(input, select)')].forEach((slot,di)=>{
                const value = data?.[ri]?.[di];
                if(!value || !slot) return;
                else if(slot.tagName=='SELECT') {
                    const opt = [...slot.options].sort( (a,b)=>fuzzy(value,b.textContent)-fuzzy(value,a.textContent) )[0];
                    slot.value = opt.value ?? opt.textContent;
                }else slot.value = value;
            })
        })
    })

    $('#send').addEventListener('click',()=>{
        [...b.querySelectorAll('tr')].forEach(async (r,ri)=>{
            const body = new URLSearchParams();
            [...r.querySelectorAll('td :is(input, select)')].forEach((slot,di)=> body.append(slot.name, slot.value) );
            const res = await fetch($('#service').value,{ method:'POST', headers: {"Content-Type": "application/x-www-form-urlencoded", Host:'jcdstamping_uat22.billboardplanet.com'}, body});
            console.log(res);
        })
    })

    $('#add').addEventListener('click', addRow);
    //for(let i=0; i<5; i++) 
    addRow();
})
</script>
<style>
    body{
        margin:1em;
    }
    *{
        margin:0;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-size: small;
    }
    table{
        --border-collapse: collapse;
    }
    tr{
        background: white;;
    }
    td{
        margin:0;
        border: 1px solid #AAA;
    }
    th{
        padding-inline: 1ch;
        overflow-x: hidden;
        min-width: 0px;
        max-width: fit-content;
    }
    select, input{
        width:100%;
        border:none;
        background: none;
        &:focus{
            outline:none;
        }
    }
    tbody:focus{
        outline:none;
    }
    button{
        width: 100%;
        cursor: pointer;
    }
    .del{
        background:#A00;
        border:none;
        color:#FFF;
    }
    .no-border{
        border:none;
    }


    .short { display: none; }
    @media (max-width: 1020px) {
    .long { display: none; }
    .short { display: initial; }
    }
</style>
<datalist id="divs">
    <optgroup label="Colombia">
        <option value="CO01">[CO] EQUIPAMIENTOS URBANOS NACIONALES DE COLOMBIA</option>
        <option value="CO02">[CO] LLEGA</option>
        <option value="CO03">[CO] JCDECAUX COLOMBIA MOBILIARIO URBANO</option>
    </optgroup>

    <optgroup label="Costa Rica">
        <option value="CRC0001">[CR] JCDecaux Top Media Costa Rica</option>
        <option value="CRC0007">[CR] JCDecaux Top Media Costa Rica</option>
        <option value="CRC0008">[CR] PUBLIGRAFIK GROUP</option>
        <option value="CRC0009">[CR] IMC INTERAMERICANA MEDIOS DE COMUNICACIÓN</option>
    </optgroup>

    <optgroup label="Ecuador">
        <option value="ECU0001">[EC] JCDECAUX-ECUADOR</option>
    </optgroup>

    <optgroup label="Guatemala">
        <option value="GPK">[GT] PUBLICIDAD GRAFICA</option>
        <option value="JCDGTQ">[GT] JCDECAUX TOP MEDIA GUATEMALA</option>
        <option value="GTQ0009">[GT] JCDECAUX TOP MEDIA GUATEMALA</option>
        <option value="IMCGT">[GT] IMC INTERAMERICANA MEDIOS DE COMUNICACION-GUATEMALA</option>
        <option value="Mundo">[GT] MUNDO PUBLICITARIO</option>
    </optgroup>

    <optgroup label="Panama">
        <option value="PAB0021">[PA] TOP MEDIA PANAMÁ</option>
        <option value="PAB0031">[PA] PUBLITOP DE PANAMA</option>
        <option value="PAB0028">[PA] PUBLICIDAD AEROPUERTO DE TOCUMEN</option>
        <option value="PAB0001">[PA] JCDECAUX PANAMA</option>
        <option value="PAB0014">[PA] CITY BUS TOP</option>
        <option value="PAB0018">[PA] JCDECAUX TOP MEDIA SERVICIOS DE PANAMÁ</option>
        <option value="PAB0033">[PA] JCDECAUX TOP MEDIA CORPORATIVO</option>
        <option value="PAB0035">[PA] PUBLIGRAFIK</option>
        <option value="PAB0038">[PA] HIGH TRAFFIC MEDIA</option>
    </optgroup>

    <optgroup label="Republica Dominicana">
        <option value="JCDRD">[DO] JCDECAUX DOMINCANA</option>
    </optgroup>

    <optgroup label="El Salvador">
        <option value="SVC0006">[SV] TOP MEDIA EL SALVADOR</option>
        <option value="JCDSVC">[SV] JCDECAUX EL SALVADOR</option>
        <option value="SV09">[SV] IMC MEDIOS DE EL SALVADOR</option>
    </optgroup>
</datalist>

<table cellspacing="0"  cellpadding="0" >
    <thead>
        <tr>
            <th></th>
            <th><span class="long">InternalID</span> <span class="short">ID</span></th>
            <th><span class="long">DivisionCode</span> <span class="short">DivCode</span></th>
            <th><span class="long">DocumentType</span> <span class="short">DocType</span></th>
            <th>StampType</th>
            <th><span class="long">StampedUUID</span> <span class="short">UUID</span></th>
            <th><span class="long">DocumentNumber</span> <span class="short">DocNum</span></th>
            <th><span class="long">SeriesNumber</span> <span class="short">Series</span></th>
            <th><span class="long">DeniedReason</span> <span class="short">Reason</span></th>
        </tr>
    </thead>
    <tbody>
    </tbody>
    <tfoot>
        <tr >
            <td class="no-border"></td>
            <td colspan="8" class="no-border">
                <button id="add" >+</button>
            </td>
        </tr>
    </tfoot>
    
    <template>
        <tr>
            <td style="cursor:grab; user-select:none" class="drag no-border">⣿</td>
            <td><input name="InternalID"></td>
            <td><input name="DivisionCode" list="divs"></td>
            <td><select name="DocumentType">
                <option value="1">Invoice</option>
                <option value="2">Credit Invoice</option>
                <option value="4">Payment Received</option>
            </select></td>
            <td><select name="StampType">
                <option>Approve</option>
                <option>Reset</option>
                <option>Cancel</option>
                <option>Error</option>
                <option>Paid</option>
            </select></td>
            <td><input name="StampedUUID"></td>
            <td><input name="DocumentNumber"></td>
            <td><input name="SeriesNumber"></td>
            <td><input name="DeniedReason"></td>
            <td style="user-select:none" class="no-border"><button class="del">X</button></td>
        </tr>
    </template>
</table>

<div style="display:flex">
    <select id="service" style="flex:1 1 20%">
        <option value="https://jcdstamping_uat22.billboardplanet.com/Login.asmx?op=SubmitInvoiceForStamping_CENTRAM">UAT</option>
        <option value="https://jcdecauxbmanage.billboardplanet.com/ATEBStampService/login.asmx?op=SubmitInvoiceForStamping_CENTRAM">Quantum</option>
    </select>
    <button id="send" style="margin: 1em 0">Enviar</button>
</div>
