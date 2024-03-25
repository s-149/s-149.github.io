document.addEventListener('DOMContentLoaded', function () {
  // Tangkap elemen formulir
  const form = document.getElementById('formData')

  // Tambahkan event listener untuk event submit formulir
  form.addEventListener('submit', function (event) {
    event.preventDefault() // Hindari pengiriman formulir secara default

    // Tangkap nilai input dari formulir
    const selectedArea = document.querySelector('input[name="area"]:checked')

    // Kirim data ke halaman orders.html menggunakan URL query parameter
    if (selectedArea) {
      const areaValue = selectedArea.value
      window.location.href = `orders.html?area=${areaValue}`
    } else {
      alert('Silakan pilih area Anda terlebih dahulu.')
    }
  })
})

// Fungsi untuk mendapatkan nilai dari URL query parameter
function getQueryParam (param) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(param)
}

// Mendapatkan nilai area dari URL query parameter
const areaValue = getQueryParam('area')

// Menampilkan nilai area di halaman
const areaDisplay = document.getElementById('areaDisplay')
// areaDisplay.innerHTML = `<p>Anda memilih area: ${areaValue}</p>`;

// JavaScript code for fetching and displaying data
const baseUrl = () => 'https://apiweb.mile.app/api/v3/'
const token = () =>
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2NWNiNGUzMTIyMDM1MzQ3YTUwZGVkZTIiLCJqdGkiOiIxNDIyYWYxNzRiNDA5NTNhM2YyYzQxZDJjZDhlODIxOGU2ZDg3MzQzYmJhNTk5N2U1OGZjMmJlODNlZjYyYjMyZDMwN2RmMjEyYjA3NTY5NCIsImlhdCI6MTcwODM2NDUwMywibmJmIjoxNzA4MzY0NTAzLCJleHAiOjQ4NjQwMzgxMDMsInN1YiI6IjY0Yzk0NDAyOTM0NGI4NTRiYjA2NTA3NSIsInNjb3BlcyI6W119.nHSGyoQ3jfYRDNSF0BOUN-ft9vWL50zgYiPJT2UBAkAyYZ4x_dQryZunxYn1je_JDQKMk3CTh2JYatvGIsxIFj6khs45CkcCcJuMd3bJXzKYHp7HjJ2sPkbLNXZBsYMszt6TcWNIi2-_t3EFhgrvPQm-5ulF29_IdO393Iyv0x9KMPAHPawLthtuD6GIV7X6tLcDmgZTT_AxkDOl241h2Dv8xiwDIwQgiKzgjI1hv_o2HeBE7h-Hj_LkUh2emj1F6WcsHxxoSLllWdiNpcQjWOwNyuh-L1FQpGYbf_4NSUg5b7AfEegx-NUYhbtNCFpeh8IKgQMJVomhG1sWyE5VhsfSTeYySU3IIf5m90aJFJRIW75A6R0HNF_XZQaX5XLqTyluUKHA6fTuEp8IWsLiKLV3EdNs3JZl6POlcXUuEGdzR10iCRINoSubVO7YRQLroT_GHWsJ-OrM9T2NglLPe3zzEbskaVpWfOJ59ggf_No71UkqVb4Xkx5t9LY486wwz8BGKfEpqsvaEFdi-r_yuFbe_vK0hh4c1ZWZgBBP-Z_M4aw_6i8499cd21VjqttacloEun5GyHPAzxi4Ih_nEpjRGGnnO2SwFMm5Jx8JE54U1jUxuNb4Ik6HNJPY8o8SrgsOSjK6SwF_8ux5bzYm167zutB7CPH8cDdF-oJWTY0'

const getHub = () => {
  const endpoint = () => `hubs`
  const url = baseUrl() + endpoint()
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token()}`
    },
    muteHttpExceptions: true
  }

  try {
    fetch(url, options)
      .then(response => response.json())
      .then(parsedData => {
        if (parsedData && parsedData.data && parsedData.data.length > 0) {
          let html = ''
          const searchInput = document
            .getElementById('searchInput')
            .value.toLowerCase() // Ambil nilai input pencarian dan ubah menjadi lowercase

          // Filter data berdasarkan nilai pencarian
          const filteredData = parsedData.data.filter(item =>
            item.name.toLowerCase().includes(searchInput)
          )

          // Generate list of order numbers
          filteredData.forEach(item => {
            html += `
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="area" value="${item._id}" id="area${item.name}">
                  <label class="form-check-label" for="area${item.name}">
                    ${item.name}
                  </label>
                </div>
              `
          })

          // Place the generated HTML inside the dataHub div
          document.getElementById('dataHub').innerHTML = html

          // Log the response
          console.log(
            'Order numbers have been successfully fetched and displayed.'
          )
          console.log(parsedData)
        } else {
          console.log('No data received or data is empty.')
        }
      })
      .catch(error => {
        console.error('Error occurred while fetching data:', error)
      })
  } catch (error) {
    console.error('Exception:', error)
  }
}

// Panggil fungsi untuk mengambil dan menampilkan data ongoing
getHub()

// Tambahkan event listener untuk memanggil fungsi getHub setiap kali input pencarian berubah
document.getElementById('searchInput').addEventListener('input', getHub)

// get tasks
const getTasks = () => {
  const endpoint = () => `tasks?hubId=${areaValue}&status=UNASSIGNED&limit=100`
  const url = baseUrl() + endpoint()
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token()}`
    },
    muteHttpExceptions: true
  }

  try {
    fetch(url, options)
      .then(response => response.json())
      .then(parsedData => {
        if (
          parsedData &&
          parsedData.tasks &&
          parsedData.tasks.data.length > 0
        ) {
          let html = '' // Variabel html didefinisikan di sini

          // Generate list of order numbers
          parsedData.tasks.data.forEach(item => {
            html += `<div class="form-check">
                      <input class="form-check-input" name="id" type="checkbox" value="${item._id}" id="flexCheckDefault${item._id}">
                      <label class="form-check-label" for="flexCheckDefault${item._id}">
                        ${item.orderNumber}
                      </label>
                    </div>`
          })

          // Place the generated HTML inside the dataContainer div
          document.getElementById('dataContainer').innerHTML = html

          // Log the response
          console.log(
            'Order numbers have been successfully fetched and displayed.'
          )
          console.log(parsedData)
        } else {
          console.log('No data received or data is empty.')
        }
      })
      .catch(error => {
        console.error('Error occurred while fetching data:', error)
      })
  } catch (error) {
    console.error('Exception:', error)
  }
}

let bulkAssignee = async () => {
  const form = document.getElementById('formData')
  const formData = new FormData(form)
  const selectedIds = []
  const email = formData.get('email')

  // Validasi input email dan minimal satu ID terpilih
  if (!email.trim()) {
    alert('Silakan isi email Anda!')
    return
  }

  // Validasi format email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert('Format email tidak valid!')
    return
  }

  let idChecked = false
  for (const pair of formData.entries()) {
    if (pair[0] === 'id') {
      selectedIds.push(pair[1])
      idChecked = true
    }
  }

  if (!idChecked) {
    alert('Minimal pilih satu tugas!')
    return
  }

  const postData = {
    tasks: selectedIds.map(id => ({
      _id: id,
      assignee: [email]
    }))
  }

  console.log('Post data:', postData)

  const url = 'https://apiweb.mile.app/api/v3/tasks/bulk/assign'

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token()}`
      },
      body: JSON.stringify(postData)
    })

    if (response.ok) {
      const responseData = await response.json()
      console.log(responseData)
      if (responseData.success > 0) {
        alert('Success, silahkan cek kembali di aplikasi anda')
        window.location = 'orders.html'
      } else {
        alert('Gagal, Periksa kembali email anda')
      }
    } else {
      const errorMessage = await response.text()
      alert(`Gagal: ${errorMessage}`)
    }
  } catch (error) {
    console.error('Fetch error:', error.message)
    alert('Gagal, Periksa kembali email anda')
    window.location = 'orders.html'
  }
}

// Panggil fungsi untuk mengambil dan menampilkan data
getTasks()

// Tambahkan event listener untuk tombol Kirim
document.getElementById('submitButton').addEventListener('click', bulkAssignee)

// Tambahkan event listener untuk checkbox Check All
document.getElementById('checkAll').addEventListener('change', function () {
  const checkboxes = document.querySelectorAll('.form-check-input[name="id"]')
  checkboxes.forEach(checkbox => {
    checkbox.checked = this.checked
  })
})

// Fungsi untuk menangani input pencarian
document.getElementById('searchInput').addEventListener('input', function () {
  const searchValue = this.value.toLowerCase()
  const checkboxes = document.querySelectorAll('.form-check-label')
  checkboxes.forEach(checkbox => {
    const orderNumber = checkbox.textContent.toLowerCase()
    const checkboxParent = checkbox.parentNode
    if (orderNumber.includes(searchValue)) {
      checkboxParent.style.display = 'block'
    } else {
      checkboxParent.style.display = 'none'
    }
  })
})

//memanggil task yg masih ongoing
const getTasksOngoing = () => {
  const endpoint = () => `tasks?hubId=${areaValue}&status=ONGOING&limit=200`
  const url = baseUrl() + endpoint()
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token()}`
    },
    muteHttpExceptions: true
  }

  try {
    fetch(url, options)
      .then(response => response.json())
      .then(parsedData => {
        if (
          parsedData &&
          parsedData.tasks &&
          parsedData.tasks.data.length > 0
        ) {
          let html = '' // Variabel html didefinisikan di sini

          // Generate list of order numbers
          parsedData.tasks.data.forEach(item => {
            html += `<p>
                        ${item.merchantOrderId} , Rider : ${item.assignedTo.name}
                      </p>`
          })

          // Place the generated HTML inside the dataOngoing div
          document.getElementById('dataOngoing').innerHTML = html

          // Log the response
          console.log(
            'Order numbers have been successfully fetched and displayed.'
          )
          console.log(parsedData)
        } else {
          console.log('No data received or data is empty.')
        }
      })
      .catch(error => {
        console.error('Error occurred while fetching data:', error)
      })
  } catch (error) {
    console.error('Exception:', error)
  }
}
// Panggil fungsi untuk mengambil dan menampilkan data ongoing
getTasksOngoing()
