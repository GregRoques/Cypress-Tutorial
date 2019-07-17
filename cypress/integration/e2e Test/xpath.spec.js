describe('show me some XPATHs',()=>{
    it('some examples',()=>{
        //xpath for input with type text
        const input =`//input[@type="text]`

        //xpath for input with value of phone number
        const inputValue = `//input[@value="PhoneNumber']`

        //xpath for div with class 'someClass'
        const classXpath = `//div[@class="someClass"]`

        //xpath for div with id 'someID'
        const idXpath = `//div[@id="someID"]`

        //xpath for href with some value
        const href = `//a[href="https://www.google.com"]`

        //xpath for targeting and image
        const imageXpath = `//image[@src="//cdn.someaddress.com/images/catimage/22.jpg"]`
    })
})