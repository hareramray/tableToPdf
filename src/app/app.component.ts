import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tableToPdf';
  users = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' }
  ];

  exportPDF() {
    const doc = new jsPDF();
    autoTable(doc, { html: '#my-table' });
    doc.save('table.pdf');
  }
}
