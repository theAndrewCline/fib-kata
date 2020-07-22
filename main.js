function main(num) {
        if(num < 0) throw new Error('num cannot be negative number')  
        else if(num === 0) return 0;
        return (num === 1 || num === 2) ? num-1 : main(num-1) + main(num-2)
    }
}

module.exports = main
