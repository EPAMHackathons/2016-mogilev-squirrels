import DateTimeFormat = Intl.DateTimeFormat;
export interface DaySchedule {
    Id: string;
    Date: Date;
    Actions: any[];
    Comment: string;
}

export class CalendarService {
    public $inject:string[] = ['$http'];

    private days:DaySchedule[];

    private data:any;

    constructor(private $http:ng.IHttpService) {
       this.data = {
            "nodes": [
                {"id": 0, "name": "A"},
                {"id": 1, "name": "B"},
                {"id": 2, "name": "C"},
                {"id": 3, "name": "D"},
                {"id": 4, "name": "E"}
            ],
            "links": [
                {"source": 0, "target": 1, "name": ""},
                {"source": 0, "target": 2, "name": ""},
                {"source": 0, "target": 2, "name": ""},
                {"source": 0, "target": 2, "name": "A-C-3"},
                {"source": 0, "target": 3, "name": "A-D-1"},
                {"source": 0, "target": 3, "name": "A-D-2"},
                {"source": 0, "target": 4, "name": "A-E-1"},
                {"source": 0, "target": 4, "name": "A-E-2"},
                {"source": 0, "target": 4, "name": "A-E-3"},
                {"source": 0, "target": 4, "name": ""},
                {"source": 0, "target": 4, "name": ""}
            ]
        };

        this.days = [{
            Id: '0',
            Date: new Date(),
            Actions: [],
            Comment: 'Hello 1'
        }, {
            Id: '1',
            Date: new Date(),
            Actions: [],
            Comment: 'Hello 2'
        }, {
            Id: '2',
            Date: new Date(),
            Actions: [],
            Comment: 'Hello 3'
        }, {
            Id: '3',
            Date: new Date(),
            Actions: [],
            Comment: 'Hello 4'
        }];
    }

    public getDaySchedule():DaySchedule[] {
        return this.days;
    }

    public mapDayToNodes():any {
        let data = {
            "nodes": [],
            "links": []
        };

        this.days.sort((a:DaySchedule, b:DaySchedule) => {
            return a.Date.getTime() - b.Date.getTime();
        });

        this.days.forEach((item:DaySchedule, index:number) => {
            data.nodes.push({
                "id": parseInt(item.Id),
                "name": item.Date.toLocaleDateString()
            });

            if (this.days[index + 1]) {
                data.links.push({
                    "source":  parseInt(item.Id),
                    "target": parseInt(this.days[index + 1].Id),
                    "name": `${item.Id} - ${this.days[index + 1].Id}`
                });
            }
        });

        return data;
        //return this.data
    }
}