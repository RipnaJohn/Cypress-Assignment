describe('letskodeit test suite', () => {
    it('Radio Checkbox test', () => {

        cy.visit('https://www.letskodeit.com/practice')

        cy.get('#bmwcheck').check().should('be.checked').and('have.attr','type','checkbox');

        cy.get("[id= 'bmwradio']").check().should('be.checked').and('have.attr','value','bmw');

        cy.get('#carselect').select(3) 
        
     });


     it('Alert test', () => {
        cy.visit('https://www.letskodeit.com/practice')

        cy.get('#alertbtn').click()

        cy.on("window:alert",(message)=>{
            expect(message).to.eq('Hello , share this practice page and share your knowledge')
            return true;
            

        })

     });


    });

    it('hidden ele', () => {

        cy.visit('https://www.letskodeit.com/practice')

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible')


        
    });

    it('hover test1 - using invoke()', () => {

        cy.visit('https://www.letskodeit.com/practice#top')
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force:true});
        cy.url().should('include','top')
    
    });

    it('test table data', () => {
        cy.visit('https://www.letskodeit.com/practice')
        cy.xpath('(//*[@id="product"]/tbody/tr[3]/td[2])[1]').should('include.text','Python Programming Language')
        
        cy.xpath('(//*[@id="product"]/tbody/tr[3]/td[2])[1]').each(($table)=>{
            if($table.text().includes('python')){
                cy.wrap($table).next().then((price) => {
                    cy.log(price.text())
                    
                })
            }

        })






});

