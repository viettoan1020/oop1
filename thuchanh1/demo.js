class Phone {
    constructor(battery, draft, inbox, sent) {
        this.battery = battery;
        this.draft = draft;
        this.inbox = inbox;
        this.sent = sent;
    }
    charge(){
        this.battery = 100;
    }
    textMessage(text){
//     gan chuoi cho thu nhap
        this.draft = text;
    }
    showInbox(){
        return this.inbox;
    }

    showSent(){
        return this.sent;
    }


// dien thoai hien tai la this.
// dien thoai dc nhan tin nhan la phone
    sendMessage(phone){
//     B1: chuyen thu nhap cua dien thoai hien tai vao sent
        this.sent.push(this.draft);
//     B2: chuyen thu nhap cua dien thoai hien tai -> inbox cua phone
        phone.inbox.push(this.draft);
//     B3: xoa thu nhap
        this.draft="";
    }
}
// khai bao lop
let myPhone = new Phone(70, "", [],[]);
let myPhone1 = new Phone( 80, "", [], []);