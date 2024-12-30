import { jest, test, expect } from '@jest/globals';
import { SupabaseDriver } from '../../src/driver/supabaseDriver';
import { beforeEach, describe } from 'node:test';
import { supabaseDriverMock } from './__mocks__/driver/supabaseDriverMock';
import { CreateDiaryGateway } from '../../src/gateway/createDiaryGateway';

jest.mock('../../src/driver/supabaseDriver');

describe("supabaseに日記を登録する", () => {
	const supabaseDriver = new supabaseDriverMock() as SupabaseDriver;
	const createDiaryGateway = new CreateDiaryGateway(supabaseDriver);

	beforeEach(() => {
		supabaseDriverMock.mockClear();
	})

	test("登録が成功する", async () => {
		const expected = { status: 201, message: `diary is created.`};
		const diary = {title: "test title", body: "test body", writeDateString: "2021-01-01"};
	
		const actual = await createDiaryGateway.create(diary);
	
		expect(expected).toEqual(actual);
	})
})
