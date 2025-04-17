import { describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import app from '../app'

describe('Endpoint / registration', () => {
    // beforeEach(() => {

    // });

    const payloadCompany = {
        email: 'lucas@company.com',
        type: 'company',
        person: {
            name: null,
            cpf: null,
            dateOfbirth: null,
            phone: null,
        },
        company: {
            name: 'Lucas LTDA',
            cnpj: '82833133000103',
            openingDate: "1995-02-25T00:00:00.000Z",
            phone: '61986245839',
        },
        password: 'mb@1234',
    };

    const payloadPerson = {
        email: 'lucas@email.com',
        type: 'person',
        person: {
            name: 'Lucas Gonçalves',
            cpf: '76199607082',
            dateOfbirth: "1995-02-25T00:00:00.000Z",
            phone: '61986245839',
        },
        company: {
            name: null,
            cnpj: null,
            openingDate: null,
            phone: null,
        },
        password: 'mb@1234',
    };

    it('should register a new entry with POST to person', async () => {
        const res = await request(app).post('/api/v1/registration').send(payloadPerson);

        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Registration successful');
    });

    it('should register a new entry with POST to comapny', async () => {
        const res = await request(app).post('/api/v1/registration').send(payloadCompany);

        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Registration successful');
    });

    it('should return 400 if required fields are missing', async () => {
        const res = await request(app).post('/api/v1/registration').send({ name: 'Lucas' });

        expect(res.status).toBe(400);
        expect(res.body.message).toBe('Fields are required');
    });

    it('should return 400 if user already exists', async () => {
        const res = await request(app).post('/api/v1/registration').send(payloadCompany);

        expect(res.status).toBe(400);
        expect(res.body.message).toBe('User already exists.');
    });

    it('should return html page by GET', async () => {
        const res = await request(app).get('/api/v1/registration');

        expect(res.status).toBe(200);
        expect(res.text).toBeDefined()
    });
});
