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
    console.log(finalOutcome)
    return finalOutcome
}