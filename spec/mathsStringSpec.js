describe("MATHS STRING", function(){
    it("describes 1 + 1 and it should return initial string", function(){
        let input = "1 + 1"
        let result = calculator(input)
        expect(result).toEqual("1 + 1")
    })
    it("describes 1 + 2 and it should return initial string with the answer", function(){
        let input = "1 + 2"
        let result = calculator(input)
        expect(result).toEqual(["1 + 2", 3])
    })
    it("describes 1 x 2 and it should return initial string with the answer", function(){
        let input = "1 x 2"
        let result = calculator(input)
        expect(result).toEqual(["1 x 2", 2])
    })
    it("describes 8 / 2 and it should return initial string with the answer", function(){
        let input = "8 / 2"
        let result = calculator(input)
        expect(result).toEqual(["8 / 2", 4])
    })
    it("describes 8 - 2 and it should return initial string with the answer", function(){
        let input = "8 - 2"
        let result = calculator(input)
        expect(result).toEqual(["8 - 2", 6])
    })
    it("describes 10 + 2 and it should return initial string with the answer", function(){
        let input = "10 + 2"
        let result = calculator(input)
        expect(result).toEqual(["10 + 2", 12])
    })
    it("describes 100 + 2 and it should return initial string with the answer", function(){
        let input = "100 + 2"
        let result = calculator(input)
        expect(result).toEqual(["100 + 2", 102])
    })
    it("describes 10 - 2 and it should return initial string with the answer", function(){
        let input = "10 - 2"
        let result = calculator(input)
        expect(result).toEqual(["10 - 2", 8])
    })
    it("describes 10 / 2 and it should return initial string with the answer", function(){
        let input = "10 / 2"
        let result = calculator(input)
        expect(result).toEqual(["10 / 2", 5])
    })
    it("describes 10 * 2 and it should return initial string with the answer", function(){
        let input = "10 x 2"
        let result = calculator(input)
        expect(result).toEqual(["10 x 2", 20])
    })
    it("describes -1 + 2 and it should return initial string with the answer", function(){
        let input = "-1 + 2"
        let result = calculator(input)
        expect(result).toEqual(["-1 + 2", 1])
    })
    it("describes -1 x 2 and it should return initial string with the answer", function(){
        let input = "-1 x 2"
        let result = calculator(input)
        expect(result).toEqual(["-1 x 2", -2])
    })
    it("describes -10 / 2 and it should return initial string with the answer", function(){
        let input = "-10 / 2"
        let result = calculator(input)
        expect(result).toEqual(["-10 / 2", -5])
    })
    it("describes -10 - 2 and it should return initial string with the answer", function(){
        let input = "-10 - 2"
        let result = calculator(input)
        expect(result).toEqual(["-10 - 2", -12])
    })
})