
const day = document.querySelector('.day')
    const month = document.querySelector('.month')
    const year = document.querySelector('.year')
    const date = document.querySelector('.date')
    const time = document.querySelector('.time')

     function todayDate(){
      const today = new Date()
      const weekDays =['sunday','monday','tuesday','wenesday','thursday','friday','saturday']
      const months = ['january','february','march','april','may','june','july','august','september','october','november','December']

      day.innerHTML = today.getDate();
      month.innerHTML = months[today.getMonth()];
      year.innerHTML = today.getFullYear();
      date.innerHTML = weekDays[today.getDay()]
       
     }
     todayDate()
     