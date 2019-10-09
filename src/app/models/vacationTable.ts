export class VacationTable {
    duration: number;
    constructor(
        public startDay: Date,
        public endDay: Date,
        public description: string,
        public status: string){
        const diffTime = Math.abs(+this.startDay - +this.endDay);
        this.duration = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    }
}