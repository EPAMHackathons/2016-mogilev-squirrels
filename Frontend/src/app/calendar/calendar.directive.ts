export class Calendar implements ng.IDirective {
    public restrict:string = 'EA';
    public controller:string = 'CalendarController';
    public controllerAs:string = '$ctrl';
    public bindToController:boolean = true;
    public templateUrl:string = 'calendar/calendar.tpl.html';
    public link:ng.IDirectiveLinkFn;

    public constructor() {
        this.link = ($scope, element, attr, $ctrl)=>this.linkFn($scope, element, attr, $ctrl);
    }

    private linkFn($scope, element, attr, $ctrl) {
        $ctrl.init();

        this.render($ctrl);
    }

    private render($ctrl):void {
        var data:any = $ctrl.daysNodes;

        var mLinkNum = {};

        sortLinks();

        setLinkIndexAndNum();

        var w = 900,
            h = 900;

        var force = d3.layout.force()
            .nodes(d3.values(data.nodes))
            .links(data.links)
            .size([w, h])
            .linkDistance(150)
            .charge(-300)
            .on("tick", tick)
            .start();

        var svg = d3.select(".graphContainer").append("svg:svg")
            .attr("width", w)
            .attr("height", h);

        var path = svg.append("svg:g")
            .selectAll("path")
            .data(force.links())
            .enter().append("svg:path")
            .attr("class", "link");

        var circle = svg.append("svg:g")
            .selectAll("circle")
            .data(force.nodes())
            .enter().append("svg:circle")
            .attr("r", 6)
            .call(force.drag);

        var text = svg.append("svg:g")
            .selectAll("g")
            .data(force.nodes())
            .enter().append("svg:g");

        text.append("svg:text")
            .attr("x", 8)
            .attr("y", ".31em")
            .attr("class", "shadow")
            .text(function (d:any) {
                return d.name;
            });

        text.append("svg:text")
            .attr("x", 8)
            .attr("y", ".31em")
            .text(function (d:any) {
                return d.name;
            });

        function tick() {
            path.attr("d", function (d:any) {
                var dx = d.target.x - d.source.x,
                    dy = d.target.y - d.source.y,
                    dr = Math.sqrt(dx * dx + dy * dy);
                var lTotalLinkNum = mLinkNum[d.source.id + "," + d.target.id] || mLinkNum[d.target.id + "," + d.source.id];
                if (lTotalLinkNum > 1) {
                    dr = dr / (1 + (1 / lTotalLinkNum) * (d.linkindex - 1));
                }
                return "M" + d.source.x + "," + d.source.y +
                    "A" + dr + "," + dr + " 0 0 1," + d.target.x + "," + d.target.y +
                    "A" + dr + "," + dr + " 0 0 0," + d.source.x + "," + d.source.y;
            });

            path.append("svg:title")
                .text(function (d:any) {
                    return d.name;
                });

            circle.attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            });

            text.attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            });
        }

        function sortLinks() {
            data.links.sort(function (a, b) {
                if (a.source > b.source) {
                    return 1;
                }
                else if (a.source < b.source) {
                    return -1;
                }
                else {
                    if (a.target > b.target) {
                        return 1;
                    }
                    if (a.target < b.target) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                }
            });
        }

        function setLinkIndexAndNum() {
            for (var i = 0; i < data.links.length; i++) {
                if (i != 0 &&
                    data.links[i].source == data.links[i - 1].source &&
                    data.links[i].target == data.links[i - 1].target) {
                    data.links[i].linkindex = data.links[i - 1].linkindex + 1;
                }
                else {
                    data.links[i].linkindex = 1;
                }
                if (mLinkNum[data.links[i].target + "," + data.links[i].source] !== undefined) {
                    mLinkNum[data.links[i].target + "," + data.links[i].source] = data.links[i].linkindex;
                }
                else {
                    mLinkNum[data.links[i].source + "," + data.links[i].target] = data.links[i].linkindex;
                }
            }
        }
    }

    public static create() {
        var calendar = () => new Calendar();
        calendar.$inject = [];
        return calendar;
    }
}