class Queen {
    name: string;
    acting: number;
    comedy: number;
    dance: number;
    design: number;
    improv: number;
    runway: number;
    lipsync: number;
    image: string;
    trackRecord: string[] = [];
    favoritism = 0;
    unfavoritism = 0;
    finaleScore = 0;
    votes = 0;
    lipstick?: Queen;
    lipsyncScore = 0;

    constructor(name: string, acting: number, comedy: number, dance: number, design: number, improv: number, runway: number, lipsync: number, image = "noimage") {
        this.name = name;
        this.acting = acting;
        this.comedy = comedy;
        this.dance = dance;
        this.design = design;
        this.improv = improv;
        this.runway = runway;
        this.lipsync = lipsync;
        this.image = image;
    }

    getName(): string {
        return this.name;
    }

    getImage(): string {
        return `image/queens/${this.image}.webp`;
    }

    getStat(stat: "acting" | "comedy" | "dance" | "design" | "improv" | "runway"): number {
        return this[stat] + randomNumber(0, 15) / 10;
    }

    getLipsyncStat(): number {
        return this.lipsync + randomNumber(0, 15) / 10;
    }

    getASLipsync(): void {
        this.lipsyncScore = this.getLipsyncStat();
    }

    addToTrackRecord(placement: string): void {
        this.trackRecord.push(placement);
    }
}

class Team {
    queens: Queen[];
    name: string;
    trackRecord: string[] = [];

    constructor(queen1: Queen, queen2: Queen) {
        this.queens = [queen1, queen2];
        this.name = `${queen1.getName()} & ${queen2.getName()}`;
    }

    getName(): string {
        return this.name;
    }

    getImage(): string {
        return this.queens[0].getImage();
    }

    getStat(stat: "acting" | "comedy" | "dance" | "design" | "improv" | "runway"): number {
        const q1 = this.queens[0][stat] + randomNumber(0, 15) / 10;
        const q2 = this.queens[1][stat] + randomNumber(0, 15) / 10;
        return (q1 + q2) / 2;
    }

    getLipsyncStat(): number {
        const q1 = this.queens[0].lipsync + randomNumber(0, 15) / 10;
        const q2 = this.queens[1].lipsync + randomNumber(0, 15) / 10;
        return (q1 + q2) / 2;
    }

    addToTrackRecord(placement: string): void {
        this.trackRecord.push(placement);
        this.queens[0].addToTrackRecord(placement);
        this.queens[1].addToTrackRecord(placement);
    }
}

/* Función de utilidad para el sistema de randomness */
function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
