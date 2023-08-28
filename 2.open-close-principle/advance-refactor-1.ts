/**
 class Report {
    data: any[];

    constructor(data: any[]) {
        this.data = data;
    }

    generateReport(format: string): string {
        switch (format) {
            case 'JSON':
                return JSON.stringify(this.data);
            case 'XML':
                // ... complex XML generation logic here
                break;
            case 'CSV':
                // ... complex CSV generation logic here
                break;
            default:
                throw new Error('Format not supported');
        }
    }
}

 */

class ReportC {
  streamOfData: string[];

  constructor(streamOfData: string[]) {
    this.streamOfData = streamOfData;
  }

  generateReport(formatter: ReportFormatter): string {
    return formatter.format(this.streamOfData);
  }
}

interface ReportFormatter {
    format(streamOfData: string[]): string;
}

class JSONReportGenerator implements ReportFormatter {
  format(streamOfData: string[]): string {
    return JSON.stringify(streamOfData);
  }
}

class XMLReportGenerator implements ReportFormatter {
    format(streamOfData: string[]): string {
        return `XML: ${streamOfData.join('')}`;
    }
}

class CSVReportGenerator implements ReportFormatter {
    format(streamOfData: string[]): string {
        return `CSV: ${streamOfData.join(',')}`;
    }
}

const report = new ReportC(['a', 'b', 'c']);

console.log(report.generateReport(new JSONReportGenerator()));
console.log(report.generateReport(new XMLReportGenerator()));
console.log(report.generateReport(new CSVReportGenerator()));

