
  import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";

  describe('CalculatorService', () => {
    let service: CalculatorService;

    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(CalculatorService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    })

    it('should be created with default values', () => {
      expect(service.resultText()).toBe('0');
      expect(service.subResultText()).toBe('0');
      expect(service.lastOperator()).toBe('+');
    });

    it ('should set resultText, subRrsultText to "0" when C is pressed', () => {
      service.resultText.set('123');
      service.subResultText.set('456');
      service.lastOperator.set('*');

      service.constructNumber('C');

      expect(service.resultText()).toBe('0');
      expect(service.subResultText()).toBe('0');
      expect(service.lastOperator()).toBe('+');
    })

    it('should update resultText with number input', () => {
      service.constructNumber('1');
      expect(service.resultText()).toBe('1');

      service.constructNumber('2');
      expect(service.resultText()).toBe('12');
    });

    it('should handle operatos correctly', () => {
      service.constructNumber('1');
      service.constructNumber('-');

      expect(service.lastOperator()).toBe('-')
      expect(service.subResultText()).toBe('1')
      expect(service.resultText()).toBe('0')
    });

    it('should calculate result correctly for addition', () => {
      service.constructNumber('1');
      service.constructNumber('+');
      service.constructNumber('2');
      service.constructNumber('=');

      expect(service.resultText()).toBe('3')
    });

    it('should calculate result correctly for multiply', () => {
      service.constructNumber('2');
      service.constructNumber('*');
      service.constructNumber('5');
      service.constructNumber('=');

      expect(service.resultText()).toBe('10')
    });

    it('should calculate result correctly for divde', () => {
      // service.constructNumber('1');
      // service.constructNumber('2');
      service.resultText.set('12')
      service.constructNumber('/');
      service.constructNumber('5');
      service.constructNumber('=');

      expect(service.resultText()).toBe('2.4')
    });

    it('should handle decimal point correctly starting with zero', () => {
      service.constructNumber('0');
      service.constructNumber('.');
      service.constructNumber('.');
      service.constructNumber('.');
      service.constructNumber('.');
      service.constructNumber('0');

      expect(service.resultText()).toBe('0.')
    })
  });
