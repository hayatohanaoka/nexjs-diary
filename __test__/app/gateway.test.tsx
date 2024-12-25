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
		const diary = {title: "test title", body: "test body"};
	
		const actual = await createDiaryGateway.create(diary);
	
		expect(expected).toEqual(actual);
	})

	test("タイトルまたは本文、もしくはその両方が空白のため、登録に失敗する", async () => {
		const expected = { status: 400, message: `Failed to create diary.`};
    
		const emptyDiary = {title: "", body: ""};
    const emptyTitleDiary = {title: "", body: "test body"};
    const emptyBodyDiary = {title: "test title", body: ""};
	
		const actualEmptyDiary = await createDiaryGateway.create(emptyDiary);
		const actualEmptyTitle = await createDiaryGateway.create(emptyTitleDiary);
		const actualEmptyBody = await createDiaryGateway.create(emptyBodyDiary);
	
		expect(expected).toEqual(actualEmptyDiary);
		expect(expected).toEqual(actualEmptyTitle);
		expect(expected).toEqual(actualEmptyBody);
	})
})
