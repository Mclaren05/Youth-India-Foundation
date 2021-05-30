const divisionSelect = document.getElementById('id_division')
const subDivisionSelect = document.getElementById('subDivision')
const departmentSelect = document.getElementById('id_department')
const position = document.getElementById('position')


// fetching available positions
const fetchAvailablePositions = async() => {
    // Clear Previous Data
    position.innerHTML = '';
    let subdivisionId = subDivisionSelect.value
    let departmentId = departmentSelect.value
    if (!(subdivisionId && departmentId)) return; // need two valid values

    // Fetching
    // console.log("Fetching...")
    // console.log(`/getPosition?subid=${subdivisionId}&depid=${departmentId}`)
    let res = await fetch(`/getPosition?subid=${subdivisionId}&depid=${departmentId}`)
    let data = await res.json()
        // let data = {'Noob':'1','Coder':'2', 'Bhai':'3'}

    // Update UI
    for (const [item, id] of Object.entries(data)) {
        let option = document.createElement('option')
        option.value = id;
        option.innerText = item
        position.appendChild(option)
    }


}


const fetchAvailableDivision = async() => {

    console.log(1)
        // Clear Previous Data
    subDivisionSelect.innerHTML = '';
    let val = divisionSelect.value
    if (!val) return;

    // Fetch data
    // console.log("Fetching...")
    // console.log(`/getSubdivsion?id=${val}`)

    let res = await fetch(`/getSubdivsion?id=${val}`)
    let data = await res.json()

    // let data = {'Noob':'1','Coder':'2', 'Bhai':'3'}
    // console.log(data)

    // Update UI
    for (const [item, id] of Object.entries(data)) {
        let option = document.createElement('option')
        option.value = id;
        option.innerText = item
        subDivisionSelect.appendChild(option)
    }
    fetchAvailablePositions()

}

// autoselect through special link
const autoSelectOption = async() => {
    // If there is a get link
    const params = new URLSearchParams(window.location.search)
    if (params.has('div') && params.has('subdiv')) {
        let div = params.get('div')
        let subdiv = params.get('subdiv')
        console.log(div, subdiv)

        // loop and select
        let divisions = document.getElementById('id_division').options;
        for (let i = 0; i < divisions.length; i++) {
            if (divisions[i].text.toLocaleLowerCase() === div.toLocaleLowerCase()) {
                divisions[i].selected = true;
                break;
            }
        }
        await fetchAvailableDivision()
        let subdivisions = document.getElementById('subDivision').options;
        for (let i = 0; i < subdivisions.length; i++) {
            if (subdivisions[i].text.toLocaleLowerCase() === subdiv.toLocaleLowerCase()) {
                subdivisions[i].selected = true;
                break;
            }
        }
    }
}

// Fetch subdivisions depanding upon divisions
divisionSelect.addEventListener('change', fetchAvailableDivision)


subDivisionSelect.addEventListener('change', fetchAvailablePositions)
departmentSelect.addEventListener('change', fetchAvailablePositions)




// fetchAvailablePositions()
autoSelectOption();