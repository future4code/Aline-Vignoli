enum sigla {
    AC = "AC",
    DC = "DC"
}

function checaPeriodoHistorico(ano: number, sigla?: sigla) : string {
    let periodoHistorico : string  = ""
    let campoSigla: string = sigla ? sigla : "DC" 
    
    if ( ano < 4000 && campoSigla === "AC" ){
        periodoHistorico = "Pré-história"
    }

    if ( ano >= 4000 && campoSigla === "AC" || ano < 476 && campoSigla === "DC" ){
        periodoHistorico = "Idade Antiga"
    }

    if ( campoSigla === "DC" && ano >= 476 || ano < 1453 ){
        periodoHistorico = "Idade Média"
    }

    if ( campoSigla === "DC" && ano >= 1453 || ano < 1789 ){
        periodoHistorico = "Idade Moderna"
    }

    if ( campoSigla === "DC" && ano >= 1789 || ano < 2022 ){
        periodoHistorico = "Idade Contemporânea"
    }

    return periodoHistorico
}

const periodoHistorico = checaPeriodoHistorico(4030, sigla.AC)
console.log(periodoHistorico)