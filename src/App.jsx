import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('#e6f4f4')
  const [time, setTime] = useState('')
  const [kind_of_work, setKind_of_work] = useState('')
  const [location, setLocation] = useState('')
  const [users, setUsers] = useState([])
  const [features, setFeatures] = useState('')
  const [features_2, setFeatures_2] = useState('')
  const [fullStack, setFullStack] = useState('')
  const [python, setPython] = useState('')
  const [midweight, setMidWeight] = useState('')
  const [Reactjs, setReactJs] = useState('')
  const formRef = useRef()
  const [edit, setEdit] = useState(false)
  const [formData, setFormData] = useState({
    location: '',
    nameCompany: '',
    fullStack: '',
  })

  document.body.style.backgroundColor = color


  useEffect(() => {
    const saved = localStorage.getItem('users')
    const checked_1 = localStorage.getItem('checked_1')
    const checked_2 = localStorage.getItem('checked_2')
    const checked_3 = localStorage.getItem('checked_3')
    const checked_4 = localStorage.getItem('checked_4')
    const checked_5 = localStorage.getItem('checked_5')
    const checked_6 = localStorage.getItem('checked_6')
    const dark = localStorage.getItem('color')
    if (saved) {
      setUsers(JSON.parse(saved))
    }
    if (checked_1) {
      setFeatures(JSON.parse(checked_1))
    }
    if (checked_2) {
      setFeatures_2(JSON.parse(checked_2))
    }
    if (checked_3) {
      setFullStack(JSON.parse(checked_3))
    }
    if (checked_4) {
      setPython(JSON.parse(checked_4))
    }
    if (checked_5) {
      setMidWeight(JSON.parse(checked_5))
    }
    if (checked_6) {
      setReactJs(JSON.parse(checked_6))
    }
    if (dark) {
      setColor(JSON.parse(dark))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  function handleAdder(event) {
    event.preventDefault()
    console.log(color)

    const user = {
      time,
      kind_of_work,
      location,
      formData,
      fullStack,
      python,
      midweight,
      Reactjs,
      features,
      features_2
    }
    console.log(user)

    if (formData.location.length < 5) {
      return alert('URL manzilni to`g`ri kiriting')
    }

    if (formData.nameCompany.length < 3) {
      return alert('Kompaniya nomini to`g`ri kiriting')
    }

    if (formData.fullStack.length < 3) {
      return alert('Lavozimni to`g`ri kiriting')
    }

    if (time.length === 0) {
      return alert('Ish vaqtini tanlang')
    }

    if (kind_of_work.length === 0) {
      return alert('Ish turini tanlang')
    }

    if (location.length === 0) {
      return alert('Joylashuvni tanlang')
    }

    setUsers([...users, user])
    formRef.current.reset()

    setTime('')
    setKind_of_work('')
    setLocation('')

    setFormData({ location: '', nameCompany: '', fullStack: '' })
    setTime('')
    setKind_of_work('')
    setLocation('')
    setFeatures('')
    setFeatures_2('')
    setFullStack('')
    setPython('')
    setMidWeight('')
    setReactJs('')

  }

  function handleSelect(event) {
    console.log(event.target.value, event.target.checked)
    let copied = [...features]
    if (event.target.checked) {
      localStorage.setItem('checked_1', JSON.stringify(event.target.value))
      copied.push(event.target.value)
    }
    setFeatures(copied)
  }

  function handleSelect_2(event) {
    console.log(event.target.value, event.target.checked)
    let copied = [...features_2]
    if (event.target.checked) {
      localStorage.setItem('checked_2', JSON.stringify(event.target.value))
      copied.push(event.target.value)
    }
    setFeatures_2(copied)
  }

  function handleSelect_3(event) {
    console.log(event.target.value, event.target.checked)
    let copied = [...fullStack]
    if (event.target.checked) {
      localStorage.setItem('checked_3', JSON.stringify(event.target.value))
      copied.push(event.target.value)
    }
    setFullStack(copied)
  }

  function handleSelect_4(event) {
    console.log(event.target.value, event.target.checked)
    let copied = [...python]
    if (event.target.checked) {
      localStorage.setItem('checked_4', JSON.stringify(event.target.value))
      copied.push(event.target.value)
    }
    setPython(copied)
  }

  function handleSelect_5(event) {
    console.log(event.target.value, event.target.checked)
    let copied = [...midweight]
    if (event.target.checked) {
      localStorage.setItem('checked_5', JSON.stringify(event.target.value))
      copied.push(event.target.value)
    }
    setMidWeight(copied)
  }

  function handleSelect_6(event) {
    console.log(event.target.value, event.target.checked)
    let copied = [...Reactjs]
    if (event.target.checked) {
      localStorage.setItem('checked_6', JSON.stringify(event.target.value))
      copied.push(event.target.value)
    }
    setReactJs(copied)
  }

  function handleDelete(index) {
    let confirmation = confirm('Rostdanham o`chirib yubormoqchimisiz')

    if (confirmation) {
      setUsers(users.filter((_, i) => i !== index))
      localStorage.removeItem('users')
      localStorage.removeItem('checked_1')
      localStorage.removeItem('checked_2')
      localStorage.removeItem('checked_3')
      localStorage.removeItem('checked_4')
      localStorage.removeItem('checked_5')
      localStorage.removeItem('checked_6')
    }
  }

  return (
    <div>
      <header className='header'>
        <select value={color} onChange={function (e) {
          setColor(e.target.value)
          localStorage.setItem('color', JSON.stringify(e.target.value))
        }} className='DarkMode'>
          <option value="#e6f4f4">Light</option>
          <option value="black">Dark</option>
        </select>
      </header>

      <div style={{ backgroundColor: color === 'black' ? 'rgb(49, 47, 47)' : 'white' }} className='first_div'>
        <h3 style={{ color: color === 'black' ? 'white' : 'black' }} className='title'>Vakansiya ma'lumotlarini kiriting</h3>
        <form ref={formRef} className='form'>
          <div className='div_1'>
            <label style={{ color: color === 'black' ? 'white' : 'black' }} htmlFor="type_url">Logotip URL</label>
            <input value={formData.location} onChange={(e) => { setFormData({ ...formData, location: e.target.value }) }} className='first_input' id='type_url' type="text" placeholder='Logotip URL manzilini kiriting' />
          </div>

          <div className='div_2'>
            <label style={{ color: color === 'black' ? 'white' : 'black' }} htmlFor="type_manage">Kompaniya nomi</label>
            <input value={formData.nameCompany} onChange={(e) => { setFormData({ ...formData, nameCompany: e.target.value }) }} className='second_input' id='type_manage' type="text" placeholder='Manage' />
          </div>

          <div className='div_3'>
            <input onChange={handleSelect} id='check' value='NEW!' type="checkbox" />
            <label style={{ color: color === 'black' ? 'white' : 'black' }} htmlFor="check">New!</label>
            <input onChange={handleSelect_2} value='Featured' id='check_2' type="checkbox" />
            <label style={{ color: color === 'black' ? 'white' : 'black' }} htmlFor="check_2">Featured</label>
          </div>

          <div className='div_4'>
            <label style={{ color: color === 'black' ? 'white' : 'black' }} htmlFor="lavozim">Lavozim</label>
            <input value={formData.fullStack} onChange={(e) => { setFormData({ ...formData, fullStack: e.target.value }) }} className='third_input' id='lavozim' type="text" placeholder='Fullstack Developer' />
          </div>

          <div className='select_section'>
            <div>
              <label style={{ color: color === 'black' ? 'white' : 'black' }} htmlFor="select">Vaqt</label>
              <select value={time} onChange={(e) => { setTime(e.target.value) }} id='select' className="select_first">
                <option>Tanlang</option>
                <option>1d ago</option>
                <option>2d ago</option>
                <option>3d ago</option>
              </select>
            </div>

            <div>
              <label style={{ color: color === 'black' ? 'white' : 'black' }} htmlFor="select_second">Ish turi</label>
              <select value={kind_of_work} onChange={(e) => { setKind_of_work(e.target.value) }} id='select_second' className="select_second">
                <option style={{ color: color === 'black' ? 'white' : 'black' }}>Tanlang</option>
                <option style={{ color: color === 'black' ? 'white' : 'black' }}>Part Time</option>
                <option style={{ color: color === 'black' ? 'white' : 'black' }}>Full Time</option>
                <option style={{ color: color === 'black' ? 'white' : 'black' }}>Contract</option>
              </select>
            </div>

            <div>
              <label style={{ color: color === 'black' ? 'white' : 'black' }} htmlFor="select_third">Joylashuv</label>
              <select value={location} onChange={(e) => { setLocation(e.target.value) }} id='select_third' className="select_third">
                <option>Tanlang</option>
                <option >USA only</option>
                <option>Remote</option>
                <option>Worldwide</option>
                <option>UK only</option>
              </select>
            </div>
          </div>


          <div className='end_of_div'>
            <span style={{ color: color === 'black' ? 'white' : 'black' }}>Ko'nikmalar</span>
            <div className='div_end'>
              <div className='stick'>
                <div className='div_box'>
                  <input value='FullStack' onChange={handleSelect_3} id='full' type="checkbox" />
                  <label style={{ color: color === 'black' ? 'white' : 'black' }} htmlFor="full">Full stack</label>
                </div>

                <div className='div_box_2'>
                  <input value='Python' onChange={handleSelect_4} id='full_second' type="checkbox" />
                  <label style={{ color: color === 'black' ? 'white' : 'black' }} htmlFor="full_second">Python</label>
                </div>
              </div>


              <div className='stick_2'>
                <div className='div_box_3'>
                  <input value='Midweight' onChange={handleSelect_5} id='full_third' type="checkbox" />
                  <label style={{ color: color === 'black' ? 'white' : 'black' }} htmlFor="full-third">Midweight</label>
                </div>

                <div className='div_box_4'>
                  <input value='React' onChange={handleSelect_6} id='full_fourth' type="checkbox" />
                  <label style={{ color: color === 'black' ? 'white' : 'black' }} htmlFor="full_fourth">React</label>
                </div>
              </div>

            </div>
          </div>

          <button onClick={handleAdder} className='save_button'>Saqlash</button>
        </form>
      </div>

      <div className='asosiy'>
        {
          users
            .map((user, index) => (
              <div className='main_card' key={index}>
                <div>
                  <div className='features'>
                    <span className='title_of_card'>Photosnap</span>
                    {user.features.length > 0 && <span className='new'>{user.features}</span>}
                    {user.features_2.length > 0 && <span className='featured'>{user.features_2}</span>}
                  </div>

                  <div>
                    <h3>{user.formData.fullStack}</h3>
                  </div>

                  <div className='times'>
                    <span className='same'>{user.time}</span>
                    {user.time.length > 0 && <span> - </span>}
                    <span className='same'>{user.kind_of_work}</span>
                    {user.location.length > 0 && <span> - </span>}
                    <span className='same'>{user.location}</span>
                  </div>
                </div>

                <div className='kinds'>
                  {user.fullStack.length > 0 && <span className='kind'>{user.fullStack}</span>}
                  {user.python.length > 0 && <span className='kind'>{user.python}</span>}
                  {user.midweight.length > 0 && <span className='kind'>{user.midweight}</span>}
                  {user.Reactjs.length > 0 && <span className='kind'>{user.Reactjs}</span>}
                  <button onClick={() => handleDelete(index)} className='deleteBtnSame'>Delete</button>
                  {/* <button onClick={() => handleEdit(index)} className='deleteBtnSame'>Edit</button> */}
                </div>
              </div>
            ))
        }

      </div>
    </div>
  )
}

export default App