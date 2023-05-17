
class FooterView {
      
    static addText(description) {
      const element = document.querySelector('.description')
      element.innerHTML += description
   }

   static clearAll() {
    document.querySelector('.container1').innerHTML = " "
   }

   static editText(description) {
    const element = document.querySelector('.description')
      element.innerHTML = description
   }
}

class FormView {
    static addField(name = " ", placeholder = " ") {
        let elem = document.getElementById('form')
        let lastRow = document.createElement('row')
        lastRow.innerHTML = `<div class="col-25">
                 <label for="`+ name+`">`+name+`</label>
                     </div>
                    <div class="col-75">
                   <input type="text1" id="`+name+`" name="`+name+`" placeholder="`+placeholder+`">
                </div>`
        elem.append(lastRow)
    }

    static deleteLastField() {
        let elem = document.getElementById('form')
        let last = elem.lastChild;
        last.remove();
    }
}

class UserView {
    static changeUser(username) {
        let elem = document.querySelector('nav-right')
        elem.innerHTML = 'Пользователь: ' + username
    }
}

class NavbarView {
    static addPage(pageName) {
        let elem = document.getElementById('nav')
        let item = document.createElement('li')
        item.innerHTML = `<a href="#">`+pageName+`</a>`
        elem.append(item);
    }

    static deleteLastPage() {
        let elem = document.getElementById('nav')
        let last = elem.lastChild;
        last.remove();
    }
}