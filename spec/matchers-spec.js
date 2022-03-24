describe("Suíte de testes do toBe", function(){
    var valorBooleano = true;
    var valorBooleanoCopia = valorBooleano;
    var valorBooleanoTexto = "true";
    var obj1 = { 'valor': valorBooleano};
    var obj2 = { 'valor': valorBooleano};

    it("deve validar o uso do matcher 'toBe'", function(){
        expect(valorBooleano).toBe(true);
        expect(valorBooleanoCopia).toBe(valorBooleano);
        expect(valorBooleano).not.toBe(valorBooleanoTexto);
        expect(valorBooleanoTexto).toBe("true");
        expect(obj1).not.toBe(obj2);
    });
});

describe("Suíte de testes do toMatch", function(){
    var textoComparar = "Curso de testes com Jasmine";
    it("deve validar o uso do matcher 'toMatch'", function(){
        expect(textoComparar).toMatch(/Jasmine/);
        expect(textoComparar).toMatch("Jasmine");
        expect(textoComparar).toMatch(/Jasmine/i);
        expect(textoComparar).not.toMatch(/Javascript/);
        expect("14/12/2016").toMatch(/^\{2}\/\d{2}\/\d{4}$/);       

        
    });
});

describe("Suíte de testes do toBeDefined", function(){
    var numero = 10;
    var texto;
    var obj = { 'valor': 10 };
    it("deve validar o uso do matcher 'toBeDefined'", function(){
        expect(numero).toBeDefined();
        expect(texto).not.toBeDefined();
        expect(obj.mensagem).not.toBeDefined();
    });
});


describe("Suíte de testes do toBeUndefined", function(){
    var numero = 10;
    var texto;
    var obj = { 'valor': 10 };
    it("deve validar o uso do matcher 'toBeUnDefined'", function(){
        expect(numero).toBeUndefined();
        expect(texto).not.toBeUndefined();
        expect(obj.mensagem).not.toBeUndefined();
    });
});


describe("Suíte de testes do toBeNull", function(){
    var objeto = null;
    var texto;
    var numero = 10;
    it("deve validar o uso do matcher 'toBeNull'", function(){
        expect(objeto).toBeNull();
        expect(numero).not.toBeNull();
        expect(texto).not.toBeNull();
        expect(objeto).not.toEqual(texto);
    });
});

// aceita qualquer valor valido  = "false"/ "0" / "undefined" / "null" /"NaN"
describe("Suíte de testes do toBeTruthy", function(){
    var objeto = {'valor': 123};
    var texto;
    var numero = 10;
    it("deve validar o uso do matcher 'toBeTruthy'", function(){
        expect(objeto).toBeTruthy();
        expect(numero).toBeTruthy();
        expect(texto).not.toBeTruthy();
    });
});

describe("Suíte de testes do toBeFalsy", function(){
    var objeto = {'valor': 123};
    var texto;
    var numero = 10;
    it("deve validar o uso do matcher 'toBeFalsy'", function(){
        expect(objeto).toBeTruthy();
        expect(numero).toBeTruthy();
        expect(texto).not.toBeTruthy();
    });
});