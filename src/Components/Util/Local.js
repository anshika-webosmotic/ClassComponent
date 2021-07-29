class Local {
  checkLocal() {
    if (localStorage.getItem("contactBook")) {
      return true;
    } else {
      return false;
    }
  }
  createLocal(){
    if(!this.checkLocal()){
      const emptyArr = [];
      localStorage.setItem('contactBook', JSON.stringify(emptyArr));
    }
  }
  getId(){
    const random = Math.floor((Math.random() * 100) + 1);
    return random;
  }
  setLocal(obj){
    const temp = JSON.parse(localStorage.getItem('contactBook'));
    const elementIndex = temp.findIndex(function (element) {
      return element.userId === obj.userId;
    });
    if(elementIndex>=0){
      temp[elementIndex] = obj;
    }
    else{
      temp.push(obj);
    }
    
    localStorage.setItem('contactBook', JSON.stringify(temp));
  }
  getLocal(){
    const temp = JSON.parse(localStorage.getItem('contactBook'));
    return temp;
  }
  delRecord(index){
    const temp = JSON.parse(localStorage.getItem('contactBook'));
    temp.splice(index, 1);
    console.log(temp);
    localStorage.setItem('contactBook', JSON.stringify(temp));
  }
  editRecord(index){
    const temp = JSON.parse(localStorage.getItem('contactBook'));
    const toUpdated = temp[index];
    return toUpdated;
  }
}
export default new Local();
