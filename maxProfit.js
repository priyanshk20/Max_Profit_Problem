
const input1={
    time: 7,
    earning:3000
}

const input2={
    time: 8,
    earning:4500
}

const input3={
    time: 13,
    earning:16500
}

const maxProfit = (operation) => {
    let finalOutcome = []
    const ventures = [{name:'T', earning:1500, buildTime:5}, {name:'P', earning:1000, buildTime:4}, {name:'C', earning:3000, buildTime:10}]
    for(let i = 0; i<ventures.length; i++){
        let venture = ventures[i]
        if(operation.time < venture.buildTime){
            continue
        }else{
            let noOfVentures = parseInt(operation.time / venture.buildTime)
            let totalVentureRunningTime = 0
            let totalTimeToBuild  = 0
            for(let i = 1; i<= noOfVentures; i++){
                let ventureRunningTime = (operation.time - totalTimeToBuild ) - venture.buildTime
                totalVentureRunningTime += ventureRunningTime
                totalTimeToBuild += venture.buildTime
            }
            let totalEarning = totalVentureRunningTime * venture.earning
            if(totalEarning == operation.earning){
                let outcome = {'T':0, 'P':0, 'C':0}
                outcome[venture.name] = noOfVentures
                finalOutcome.push(outcome)
            }
        }
    }
    console.log(finalOutcome);
    return finalOutcome
}
maxProfit(input1);
maxProfit(input2);
maxProfit(input3);
