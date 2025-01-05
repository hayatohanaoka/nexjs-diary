import { jest, test, expect } from '@jest/globals';
import { SupabaseDriver } from '../../src/driver/supabaseDriver';
import { beforeEach, describe } from 'node:test';
import { supabaseDriverMock } from './__mocks__/driver/supabaseDriverMock';
import { DiaryGateway } from '../../src/gateway/diaryGateway';

jest.mock('../../src/driver/supabaseDriver');

describe("supabaseにdairyを登録する", () => {
	const supabaseDriver = new supabaseDriverMock() as SupabaseDriver;
	const diaryGateway = new DiaryGateway(supabaseDriver);

	beforeEach(() => {
		supabaseDriverMock.mockClear();
	})

	test("dairyのレコード作成に成功する", async () => {
		const expected = { status: 201, message: `diary is created.`};
		const diary = {title: "test title", body: "test body", write_date: "2021-01-01"};
	
		const actual = await diaryGateway.create(diary);
	
		expect(expected).toEqual(actual);
	})

	test("diaryの全レコードの取得に成功する", async () => {
		const expectedDiariesData = {
			data: [
				{
					"id": 1,
					"title": "test title",
					"body": "test body",
					"write_date": "2021-08-01"
				},
				{
					"id": 2,
					"title": "test title2",
					"body": "test body2",
					"write_date": "2021-08-02"
				}
			],
			status: 200
		}
		const actual = await diaryGateway.getAll();
		expect(expectedDiariesData).toEqual(actual);
	})
})
